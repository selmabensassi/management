export default function FormattedDate({ date }) {
	const formattedDate = new Date(date);

	const day = formattedDate.getDate();
	const month = ('0' + (formattedDate.getMonth() + 1)).slice(-2);
	const year = formattedDate.getFullYear();
	const hour = ('0' + formattedDate.getHours()).slice(-2);
	const minute = ('0' + formattedDate.getMinutes()).slice(-2);

	const rearrangedDate = `${day}/${month}/${year} ${hour}:${minute}`;

	return rearrangedDate;
}
