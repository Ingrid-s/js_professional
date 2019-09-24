"use strict";
var Field = /** @class */ (function () {
    function Field(input) {
        var _this = this;
        this.input = input;
        this.errors = [];
        var errorMessage = document.createElement('p');
        errorMessage.className = 'text-danger';
        this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);
        this.input.addEventListener('input', function () {
            _this.errors = [];
            _this.validate();
            errorMessage.innerText = _this.errors[0] || '';
        });
    }
    Field.prototype.validate = function () { };
    return Field;
}());
function RequiredFieldDecorator(field) {
    var validate = field.validate;
    field.validate = function () {
        validate();
        var value = field.input.value;
        if (!value) {
            field.errors.push('Requerido');
        }
    };
    return field;
}
function EmailFieldDecorator(field) {
    var validate = field.validate;
    field.validate = function () {
        validate();
        var value = field.input.value;
        if (value.indexOf('@') === -1) {
            field.errors.push('Debe ser un email');
        }
    };
    return field;
}
var field = new Field(document.querySelector('#email'));
field = RequiredFieldDecorator(field);
field = EmailFieldDecorator(field);
