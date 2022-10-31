import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginPage = class LoginPage {
    constructor(router, trainerService, fb) {
        this.router = router;
        this.trainerService = trainerService;
        this.usernameCtrl = fb.control('', Validators.required);
        this.passwordCtrl = fb.control('', Validators.required);
        this.userForm = fb.group({
            name: this.usernameCtrl,
            password: this.passwordCtrl
        });
    }
    ngOnDestroy() {
        if (this.trainerServiceSubscription) {
            this.trainerServiceSubscription.unsubscribe();
        }
    }
    validate() {
        this.user = {
            login: this.userForm.get('name').value,
            password: this.userForm.get('password').value,
            connected: true
        };
        this.trainerServiceSubscription = this.trainerService.user.subscribe(storedUser => {
            this.storedUser = storedUser;
        });
        if (this.user.login === this.storedUser.login && this.user.password === this.storedUser.password) {
            this.trainerService.setUser({ ...this.user });
            this.router.navigate([`/`]);
        }
        else {
            alert('Unknown user');
        }
    }
    success(userArray) {
        return userArray.find(user => JSON.stringify(user) === JSON.stringify(this.user));
    }
};
LoginPage = __decorate([
    Component({
        selector: 'app-account',
        templateUrl: './login-page.component.html',
        styleUrls: ['./login-page.component.scss'],
    })
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login-page.component.js.map