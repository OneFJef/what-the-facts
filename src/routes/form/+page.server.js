import prisma from '$lib/prisma';
import { NTFY_UUID } from '$env/static/private';

/** @type {import('./$types').Actions} */
export const actions = {
	submitFact: async ({ request }) => {
		const form = await request.formData();

		let year = Number(form.get('year'));
		let fact = form.get('fact');

		fetch(NTFY_UUID, {
			method: 'POST',
			body: year + ': ' + fact
		});

		await prisma.Facts.create({
			data: {
				year,
				fact
			}
		});
	}
};
