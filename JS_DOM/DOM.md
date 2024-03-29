**DOM Document Object Model (DOM)** là biểu diễn dữ liệu của những đối tượng kết hợp 
với cấu trúc và nội dung của một tài liệu (document) trên web.

**Document Object Model (DOM)** là một ngôn ngữ giao diện (programming interface) cho web documents.\
Nó hiển thị trang do đó nó có thể thay đổi cấu trúc(structure), kiểu (style) và nội dung (content).\
DOM hiển thị tài liệu (document) như nodes và đối tượng (objects);
từ đó, ngôn ngữ có thể tương tác với trang

- Javascript có thể thay đổi tất cả phần tử HTML trong page
- Javascript có thể thay đổi tất cả thuộc tính HTML trong page
- Javascript có thể thay đổi tất cả kiểu CSS trong page
- Javascript có thể loại bỏ thuộc tính và phần tử HTML
- Javascript có thể thêm thuộc tính và phần tử HTML
- Javascript có thể tương tác với tất cả sự kiện HTML trong page
- Javascript có thể tạo mới sự kiện HTML trong page

**Javascript-HTML DOM Methods**

**HTML DOM methods(phương thức)** là hành động (actions) có thể thực thi (trong phần tử HTML)

**HTML DOM properties** là giá trị (values) (của phần tử HTML) có thể đặt hoặc thay đổi

**getElementById() Method** một cách phổ biến để truy cập phần tử HTML để sử dụng id của phần tử\
```
const id = document.getElementById('demo')
```
**innerHTML property** cách dễ nhất để nhận nội dung của một phần tử HTML hữu dụng trong nhận và thay đổi nội dung của phần tử HTML\
**innerHTML property** có thể nhận và thay thế tất cả phần tử HTML bao gồm cả `<html>` và `<body>`

**Tìm kiếm phần tử HTML**

+ document.getElementById(id) --- Tìm phần tử bằng id
+ document.getElementsByTagName(name) --- Tìm phần tử bằng tagName
+ document.getElementsByClassName(name) --- Tìm phần tử bằng ClassName

**Thay đổi phần tử HTML Property**
+ element.innerHTML =  new html content --- thay đổi bên trong HTML của một phần tử
+ element.attribute = new value --- thay đổi giá trị thuộc tính của một phần tử HTML
+ element.style.property = new style --- thay đổi kiểu của một phần tử HTML
Method
+ element.setAttribute(attribute, value) --- thay đổi giá trị thuộc tính của một phần tử HTML

**Thêm và xóa phần tử**

+ document.createElement(element) --- Tạo một phần tử HTML
+ document.removeChild(element) --- Loại bỏ một phần tử HTML
+ document.appendChild(element) --- Thêm một phần tử HTML
+ document.replaceChild(new, old) --- Thay đổi một phần tử HTML
+ document.write(text) --- Ghi vào HTML trực tiếp

**Thêm Events Handlers**

+ document.getElementById(id).onclick = function(){code} --- Thêm code xử lý vào event click.

| Property | Description |
-----------|--------------
|document.anchors|Returns all `<a>` elements that have a name attribute|
|document.baseURI|Returns the absolute base URI of the document (X)|
|document.body|Returns the `<body>` element|
|document.cookie|Returns the document's cookie (X)|
|document.doctype|Returns the document's doctype|
|document.documentElement|Returns the `<html>` element|             	    	
|document.documentMode|Returns the mode used by the browser (X)|
|document.documentURI|Returns the URI of the document (X)|
|document.domain|Returns the domain name of the document server (X)|
|document.embeds |Returns all `<embed>` elements (X)|
|document.forms |Returns all `<form>` elements (X)|
|document.head |Returns the `<head>` element|	
|document.images |Returns all `<img>` elements|
|document.implementation |Returns the DOM implementation|
|document.inputEncoding |Returns the document's encoding (character set) (X)|
|document.lastModified |Returns the date and time the |document was updated (X)|
|document.links|Returns all `<area>` and `<a>` elements that have a href attribute (X)|
|document.readyState|Returns the (loading) status of the document|
|document.referrer |Returns the URI of the referrer (the linking document)(X)|
|document.scripts|Returns all `<script> elements (X)`|
|document.strictErrorChecking |Returns if error checking is enforced (X)|
|document.title |Returns the `<title>` element|
|document.URL |Returns the complete URL of the document (X)|

**Tham khảo**

W3school.com