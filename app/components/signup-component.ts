import {Component, ViewChild} from "@angular/core";
import {SignUpService} from "../services/signup-service";
import {SignUp} from "../classes/signup";
import {Status} from "../classes/status";
import {SaltRequest} from "../classes/salt-request";
import {Router} from "@angular/router";
import {SaltService} from "../services/salt-service";
import {Salt} from "../classes/salt";

declare function addTwo(x: number, y: number) : number;

@Component({
	templateUrl: "./templates/signup.php"
})

export class SignUpComponent {
	@ViewChild("signUpForm") signUpForm: any;
	signUpData: SignUp = new SignUp("", "", "");
	salt: Salt = null;
	signUpStatus : Status = null;
	saltRequest: SaltRequest = new SaltRequest("", true);

	constructor(private SaltService: SaltService, private signUpService: SignUpService, private router: Router) {

	}

	signUp(): void {
		if(this.signUpData.password === this.signUpData.passwordConfirm) {
			this.saltRequest.username = this.signUpData.username;
			this.SaltService.salt(this.saltRequest)
				.subscribe(salt => {
					this.salt = salt;
					this.signUpService.signUp(this.signUpData)
						.subscribe(signUpStatus => {
							this.signUpStatus = signUpStatus;
							if (signUpStatus.status === 200) {
								this.router.navigate(["/home/"]);
							}
						});
				});
		}
	}
	foo(): void {
		let sum = addTwo(18, 24);
		console.log("some sum is something like " + sum);
	}
}
