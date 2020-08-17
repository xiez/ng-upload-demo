ref: https://www.techiediaries.com/django-rest-image-file-upload-tutorial/

```
curl -X POST -F foo=bar -F file=@new_po.xlsx -H "Authorization:Token token" https://127.0.0.1/api/v1/sale-orders/excel-orders/

curl -X POST -F foo=bar -F file=@new_po.xlsx http://127.0.0.1:8000/upload/
```


