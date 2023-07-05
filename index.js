// const apiKey="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"
// const url= "https://api.openai.com/v1/completions"
// fetch(url,{
// 	method:'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		'Authorization': 'Bearer ${apiKey}'
// 	},
// 	body: JSON.stringify({
// 		'model': "text-davinci-003",
// 		'prompt':"What is the famous singer in Turkey?"
// 	})
// }).then(res=>res.json()).then(data =>console.log(data))

// Challenge:
//   1. Make a fetch request to OpenAi API. 
//   2. The prompt should request an enthusiastic response
//      in no more than 5 words. 
//   3. For now you can just log out the completion to check 
//      it's working

const apiKey="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"
const url= "https://api.openai.com/v1/completions"
