import {Component, OnInit, ViewChild} from '@angular/core';
import {UtilsService} from "../../shared/services/utils.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @ViewChild('popover') popover;
  public isOpen: boolean = false;

  constructor(public utilsService: UtilsService) {
  }

  ngOnInit() {
  }

  presentPopover(e: Event): void {
    this.popover.event = e;
    this.isOpen = true;
  }

}
