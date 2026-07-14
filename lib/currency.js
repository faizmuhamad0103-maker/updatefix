export function rupiah(number){

return new Intl.NumberFormat(

"de-DE",

{

style:"currency",

currency:"IDR",

maximumFractionDigits:0

}

).format(number)

}