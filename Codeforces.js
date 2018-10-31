//author @Rahul Indra

a = document.getElementsByClassName("title");
count = 0;
for(i =0 ;i<a.length;i++)
{
	if(a[i].textContent == "InputCopy")
		count++;
}
b = document.getElementsByTagName('pre');
k = (count);
k +='\n';

for(i = 0;i<b.length;i+=2)
{
  k += b[i].innerText;
}
// console.log(k);
chrome.runtime.sendMessage(k);
k = '';
