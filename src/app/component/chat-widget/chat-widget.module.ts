/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWidgetComponent } from './chat-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatWidgetComponent],
  exports: [ChatWidgetComponent]
})
export class ChatWidgetModule { }
