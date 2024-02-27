import axios, { AxiosError } from "axios";

export function sendMessage() {
	const CHAT_ID = '-4087399439';
	const TOKEN = '6555563979:AAFuqIF1QuamMkoAKAsKyKkeaf8Z7gS8le0';
	const PHOTO = 'https://asterizm.io/img/message-preview.jpg'
	const form = document.getElementById('requestForm');
	const successMessage = document.getElementById('entFormSuccess');
	const errorMessage = document.getElementById('entFormError');
	
	async function sender(e) {
		try {
			e.preventDefault();

			const message = `
				<b>Заявка с сайта Asterizm Enterprise</b>
				Отправитель: ${this.name.value}
				Компания: ${this.company.value}
				E-mail: ${this.email.value}
				Telegram: ${this.telegram.value}
				Website: ${this.website.value}
			`

			// SEND MESSAGE WITHOUT IMAGE
			
			// const { data } = await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
			// 	chat_id: CHAT_ID,
			// 	parse_mode: 'HTML',
			// 	text: message
			// })	
			
			const { data } = await axios.post(`https://api.telegram.org/bot${TOKEN}/sendPhoto`, {
				chat_id: CHAT_ID,
				parse_mode: 'HTML',
				caption: message,
				photo: PHOTO
			})	

			this.closest('.popup').classList.remove('active');
			successMessage.classList.add('active');			
			this.reset();
		
		} catch(e) {
			if (e instanceof AxiosError) {
				console.error(e.message);
			}			

			this.closest('.popup').classList.remove('active');
			errorMessage.classList.add('active');
		}
	}

	form && form.addEventListener('submit', sender);
}
