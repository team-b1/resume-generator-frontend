export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';


export function create_update_field(name, value) {
	return {
		type: UPDATE_LOGIN_FIELD,
		name,
		value
	}
}