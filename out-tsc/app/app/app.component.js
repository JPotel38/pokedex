import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(translate, router, trainerService) {
        this.translate = translate;
        this.router = router;
        this.trainerService = trainerService;
        this.isChecked = false;
        this.langSelect = ['en', 'fr'];
        this.toggle = document.querySelector('#themeToggle');
        translate.setDefaultLang('en');
        translate.use('en');
        router.events.subscribe(() => this.currentUrl = router.url);
    }
    ngOnInit() {
        this.trainerServiceSubscription = this.trainerService.user.subscribe(user => this.user = user);
    }
    ngOnDestroy() {
        if (this.trainerServiceSubscription) {
            this.trainerServiceSubscription.unsubscribe();
        }
    }
    selectedLang($event) {
        this.translate.use($event.target.value);
    }
    goBackToPokedex() {
        this.router.navigate([`/`]);
    }
    switchTheme() {
        this.isChecked = this.isChecked == false;
        document.body.classList.toggle('dark', this.isChecked);
    }
    goLogin() {
        this.router.navigate([`login`]);
    }
    goAccount() {
        this.router.navigate([`account`]);
    }
    logOut() {
        this.trainerService.user.next({ ...this.user, connected: false });
    }
    goSignin() {
        this.router.navigate([`signin`]);
    }
    goToTeam() {
        this.router.navigate([`team`]);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss'],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map