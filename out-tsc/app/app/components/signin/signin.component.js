var SigninComponent_1;
import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let SigninComponent = SigninComponent_1 = class SigninComponent {
    constructor(router, trainerService, fb) {
        this.router = router;
        this.trainerService = trainerService;
        this.userArray = [];
        this.usernameCtrl = fb.control('', Validators.required);
        this.passwordCtrl = fb.control('', Validators.required);
        this.passwordConfirmCtrl = fb.control('', Validators.required);
        this.passwordForm = fb.group({ password: this.passwordCtrl, passwordConfirm: this.passwordConfirmCtrl }, { validators: SigninComponent_1.passwordMatch });
        this.userForm = fb.group({
            name: this.usernameCtrl,
            passwordForm: this.passwordForm,
            pokemonTeam: fb.control([])
        });
    }
    static passwordMatch(group) {
        const password = group.get('password').value;
        const confirm = group.get('passwordConfirm').value;
        return password === confirm ? null : { matchingError: true };
    }
    ngOnInit() {
    }
    validate() {
        this.user = {
            login: this.userForm.get('name').value,
            password: this.userForm.get('passwordForm').value.password,
            connected: true,
            pokemonTeam: []
        };
        this.trainerService.setUser(this.user);
        this.router.navigate([`/`]);
    }
};
SigninComponent = SigninComponent_1 = __decorate([
    Component({
        selector: 'app-signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.component.scss'],
    })
], SigninComponent);
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map