// メッセージの変換
export const convertMessage = (value: string) => {
  if (!value) return ''

  let message = '';
  if (value === 'おはよう')　{
    message = `${value}&#x1f600`
  } else if (value == 'おやすみ') {
    message = `${value}&#x1f634`
  } else {
    message = value
  }
  return message
}
