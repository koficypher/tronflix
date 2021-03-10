import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import homeData from '../../assets/home.json';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sections = homeData.sections;
  spotlight = homeData.spotlight;

  constructor(
    private modalCtrl: ModalController,
    private drawer: DrawerService
    ) {}

    openCategories(){}
}
