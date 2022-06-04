function stripHtml(content: string) {
	return content.replace(/(<([^>]+)>)/gi, "");
}

export default stripHtml;
