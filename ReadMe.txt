modify above app in such a way that after showing message, if the mesage is for record deleted :  Red 
if cancelled then ;Green color.
this requiremnet can be done using concept known as property Binding

Property binding is used to fetxch the value oof  a class property and use it in html template
it is done by surrounding the properties of the class in [] as shown below:
  <span [class]="colorClass"> Record Deleted</span>
class is a builtv in propeeryv of span tag and colorClass is user defined property of the component class

modify studnt managment app in such a way tht
1. create new component sort criteria which renders radio button and helps user to sort students based on either of te criteria 
 i. percentage scored
 ii. no of attempts
 iii. no of subjects learning
 --------------------------------------------

modify sms app in such a way: create component 
Student Update:  this renders student details which user has selected byv clicking on update
------------------------------------------------
modify sms app component: Login 
whixh renders login form to the user

---------------------------------------------
one more component: Register
which renders login form to the user
 in similar fashion 
AboutUs
Home
ContactUs
Menu: all 


() - event binding syntax data html to ts
[]- property binding: data  from s to html
[()] - banana in box, two way data binding , built in  module known as FormsModule
its a important for angular and popular

all form submission is typically done using two way data binidng

[(ngModel)] ="username"
where ngModel is abuiltin attribute goiven by angular
username is field define in the ts file.