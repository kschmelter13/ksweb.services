export const structure = (S: any) =>
	S.list()
		.title("Content")
		.items([
			S.listItem()
				.title("Settings")
				.child(
					S.list()
						.title("Settings Options")
						.items([
							S.listItem()
								.title("Redirects")
								.child(
									S.editor()
										.schemaType("settings")
										.documentId("generalSettings")
								),
						])
				),
			...S.documentTypeListItems().filter(
				(listItem: any) => !["redirect", "settings"].includes(listItem.getId())
			),
		]);
