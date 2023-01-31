const commentslist =[
{
	name:"应风朔间",
	comment1:
	"师父收留了我们。小凛不会再饿肚子了。",
	time :"Thu Jan 12 2022"
},{
	name:"一陌",
	comment1:
	"发现异族的一对双生子，好像是逃亡失散了，带在身边好了。",
	time :"Fri Jan 13 2022"
},{
	name:"齐木楠雄",
	comment1:
	"呀嘞呀嘞。",
	time :"Fri Jan 19 2022"

}
];
const commentsBox=document.querySelector('#commentslist');
const btnSubmit = document.querySelector('#btn-submit');
let nameInput = document.querySelector('#name');
let commentInput = document.querySelector('#comment');

const renderComments=function(commentslist){
		commentsBox.innerHTML=""

commentslist.forEach((item)=>{
			commentsBox.insertAdjacentHTML(
					'beforeend',
		   `<hr>
			<h4>
		<span>${item.name}</span>
		<span class="date">${item.time}</span>
		</h4>
			<p>${item.comment1}</p>
		`	
		)	
     }
   )
}

renderComments (commentslist);

btnSubmit.onclick =function(){
	let nameStr = nameInput.value.replace(/<(\/?\w+)>/g,"&lt;$1&gt;");
	let commentStr = commentInput.value.replace(/<(\/?\w+)>/g,"&lt;$1&gt;");
	if(nameStr!=""&&commentStr!=""){
	commentslist.unshift(
	{
		name :nameStr,
		comment1: commentStr,
		time:new Date(),
	}

	);
	renderComments(commentslist);
	commentInput.value=""
}
else
	alert('请输入昵称和内容！')
}
