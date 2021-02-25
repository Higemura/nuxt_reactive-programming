export default class Validator {
  MAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ALPHA_NUM_REGEX = /^[0-9a-zA-Z]{8,20}$/
  errors: Array<string>

  constructor() {
    this.errors = []
  }

  public required(value: string) {
    const str = String(value).replace(/\s/g, '');
    if (value === undefined || value === null || str.length <= 0) {
      this.errors.push('必須項目です')
    }
  }

  public email(value: string) {
    if (!this.MAIL_REGEX.test(value)) {
      this.errors.push('正しいメールアドレスを入れてください')
    }
  }

  public maxLength(value: string | number) {
    const length = (typeof value === 'string') ? value.length : value
    if (length >= 50) {
      this.errors.push('50文字以内で入力してください')
    }
  }

  public alphaNum(value: string) {
    if (!this.ALPHA_NUM_REGEX.test(value)) {
     this.errors.push('半角英数字8~20文字で入力してください')
    }
  }
}
