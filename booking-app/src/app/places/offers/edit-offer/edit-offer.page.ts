import { Component, OnInit, OnDestroy } from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {
  loadedPlace: Place;
  private placeSub: Subscription;
  form: FormGroup;
  isLoading = false;
  placeId: string;

  constructor(
    private placesService: PlacesService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.placeId = paramMap.get('placeId');
      this.isLoading = true;
      this.placeSub = this.placesService
        .getPlace(paramMap.get('placeId'))
        .subscribe(place => {
          this.loadedPlace = place;
          this.form = new FormGroup({
            title: new FormControl(this.loadedPlace.title, {
              updateOn: 'blur',
              validators: [Validators.required]
            }),
            description: new FormControl(this.loadedPlace.description, {
              updateOn: 'blur',
              validators: [Validators.required, Validators.maxLength(180)]
            })
          });
          this.isLoading = false;
        }, error => {
          this.alertCtrl.create({
            header: 'An error occured...',
            message: 'Place could not be fetched, please try again later',
            buttons: [{ text: 'Okay', handler: () => {
              this.router.navigate(['/places/tabs/offers']);
            } }]
          }).then(alertEl => {
            alertEl.present();
          })
        });
    });
  }

  onUpdateOffer() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl.create({
      message: 'Editing offer...'
    }).then(loadingEl => {
      loadingEl.present();
      this.placesService.updatePlace(
        this.loadedPlace.id,
        this.form.value.title,
        this.form.value.description
      ).subscribe(() => {
        loadingEl.dismiss();
        this.form.reset();
        this.navCtrl.navigateBack('/places/tabs/offers');
      });
    });
  }

  ngOnDestroy() {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }
}
