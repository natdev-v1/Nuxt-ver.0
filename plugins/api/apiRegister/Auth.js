export default (Api) => {
	const login = async (username, password) => {
		return await Api.post('/login', { username, password });
	};
	return {
		login
	};
};
