/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-simple-alert_p.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { NgSimpleAlertService } from './ng-simple-alert_p.service';
var NgSimpleAlertComponent = /** @class */ (function () {
    function NgSimpleAlertComponent(alertService) {
        this.alertService = alertService;
        this.close$ = new Subject();
    }
    /**
     * @return {?}
     */
    NgSimpleAlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
    };
    /**
     * @return {?}
     */
    NgSimpleAlertComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.close$.next();
    };
    NgSimpleAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-simple-alert_p',
                    template: "\n    <div class=\"alert\" *ngIf=\"alertMessage$ | async as alertMessage\" [ngStyle]=\"{ background: alertMessage.color }\">\n      <span class=\"closebtn\" (click)=\"closeAlert()\">&times;</span>\n      <strong>{{ alertMessage.prefix }}!</strong> {{ alertMessage.message }}\n      <span> This is Sample Package from Pradeep</span>\n    </div>\n  ",
                    styles: [".alert{padding:20px;color:#fff}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}"]
                }] }
    ];
    /** @nocollapse */
    NgSimpleAlertComponent.ctorParameters = function () { return [
        { type: NgSimpleAlertService }
    ]; };
    return NgSimpleAlertComponent;
}());
export { NgSimpleAlertComponent };
if (false) {
    /** @type {?} */
    NgSimpleAlertComponent.prototype.alertMessage$;
    /** @type {?} */
    NgSimpleAlertComponent.prototype.close$;
    /**
     * @type {?}
     * @private
     */
    NgSimpleAlertComponent.prototype.alertService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLWFsZXJ0X3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc2ltcGxlLWFsZXJ0X3AvIiwic291cmNlcyI6WyJsaWIvbmctc2ltcGxlLWFsZXJ0X3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQXNCLE1BQU0sNkJBQTZCLENBQUM7QUFFdkY7SUFlRSxnQ0FBb0IsWUFBa0M7UUFBbEMsaUJBQVksR0FBWixZQUFZLENBQXNCO1FBRnRELFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO0lBRXlCLENBQUM7Ozs7SUFFMUQseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7SUFFRCwyQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLDZWQU1UOztpQkFFRjs7OztnQkFaUSxvQkFBb0I7O0lBMEI3Qiw2QkFBQztDQUFBLEFBeEJELElBd0JDO1NBYlksc0JBQXNCOzs7SUFDakMsK0NBQXdEOztJQUN4RCx3Q0FBZ0M7Ozs7O0lBRXBCLDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmdTaW1wbGVBbGVydFNlcnZpY2UsIFNpbXBsZUFsZXJ0TWVzc2FnZSB9IGZyb20gJy4vbmctc2ltcGxlLWFsZXJ0X3Auc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXNpbXBsZS1hbGVydF9wJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYWxlcnRcIiAqbmdJZj1cImFsZXJ0TWVzc2FnZSQgfCBhc3luYyBhcyBhbGVydE1lc3NhZ2VcIiBbbmdTdHlsZV09XCJ7IGJhY2tncm91bmQ6IGFsZXJ0TWVzc2FnZS5jb2xvciB9XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImNsb3NlYnRuXCIgKGNsaWNrKT1cImNsb3NlQWxlcnQoKVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICA8c3Ryb25nPnt7IGFsZXJ0TWVzc2FnZS5wcmVmaXggfX0hPC9zdHJvbmc+IHt7IGFsZXJ0TWVzc2FnZS5tZXNzYWdlIH19XG4gICAgICA8c3Bhbj4gVGhpcyBpcyBTYW1wbGUgUGFja2FnZSBmcm9tIFByYWRlZXA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL25nLXNpbXBsZS1hbGVydF9wLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1NpbXBsZUFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWxlcnRNZXNzYWdlJDogT2JzZXJ2YWJsZTxTaW1wbGVBbGVydE1lc3NhZ2UgfCBib29sZWFuPjtcbiAgY2xvc2UkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0U2VydmljZTogTmdTaW1wbGVBbGVydFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hbGVydE1lc3NhZ2UkID0gbWVyZ2UodGhpcy5hbGVydFNlcnZpY2UuYWxlcnRNZXNzYWdlJCwgdGhpcy5jbG9zZSQpO1xuICB9XG5cbiAgY2xvc2VBbGVydCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlJC5uZXh0KCk7XG4gIH1cbn1cbiJdfQ==