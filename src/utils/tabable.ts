function tabable(condition: boolean) {
	return condition ? {} : { tabIndex: -1 };
}

export default tabable;
