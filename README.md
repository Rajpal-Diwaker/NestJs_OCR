## File upload and OCR sample

This project was built to support my article in medium:

- [File upload and image parsing with NestJS and Tesseract](https://makinhs.medium.com/file-upload-and-image-parsing-with-nestjs-and-tesseract-cc74355a21ce)

To test the project just run:

```
npm install
```

then:

```
npm start
```

You can do a post with a curl or Postman and using the random_rceipt.png in the root of this project:

```
curl --location --request POST 'http://localhost:3000/upload' \
--form 'file=@"/FULL_PATH_TO_YOUR_PROJECT/random_receipt.png"'
```

remember to replace FULL_PATH_TO_YOUR_PROJECT to your path in case of using curl.

expected output:

```
{"totalItemsSum":19.78,"totalAmountPaid":[{"item":"IMPORTO PAGATO","value":19.78}],"itemsFound":[{"item":"PEPERONE GIALLO#*","value":1.83},{"item":"SACCHETTO DI CONFEZ.","value":0.02},{"item":"POMODORO RAMATO*","value":1.05},{"item":"SACCHETTO DI CONFEZ.","value":0.02},{"item":"CIPOLLE BIANCHE SFUS","value":0.7},{"item":"SACCHETTO DI CONFEZ.","value":0.02},{"item":"CETRIOLI SFUSI*","value":1.8},{"item":"SACCHETTO DI CONFEZ.","value":0.02},{"item":"INS .BRASILIANA","value":0.97},{"item":"ARANCE NAVEL RETE KG","value":2.55},{"item":"CUOR DI LINO MB GR","value":2},{"item":"1P PROVOLA AFFUMICAT","value":1.09},{"item":"LATTE CALCIUM PLUS L","value":1.35},{"item":"BIR.MORETTI BAFFONE","value":4.36},{"item":"BIRRA BUDWEISER VAP","value":2}]}% 
```


Cheers,
