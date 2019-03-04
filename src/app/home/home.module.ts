/*
 * Copyright 2019 VMware, all rights reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { TranslateModule } from '@ngx-translate/core';
import { BlockchainStatusComponent } from './blockchain-status/blockchain-status.component';
import { BlockchainStatusCardComponent } from './blockchain-status/blockchain-status-card.component';
import { BlockchainStatusConnectorComponent } from './blockchain-status/blockchain-status-connector.component';
import { BlockchainVisualizationComponent } from './blockchain-visualization/blockchain-visualization.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ClarityModule,
    CommonModule,
    ClrFormsNextModule,
    FormsModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    BlockchainStatusCardComponent,
    BlockchainStatusComponent,
    BlockchainStatusConnectorComponent,
    BlockchainVisualizationComponent,
    CreateOrderComponent,
    HomeComponent,
    OrderListComponent
  ],
  exports: [
    CreateOrderComponent
  ]
})
export class HomeModule { }
