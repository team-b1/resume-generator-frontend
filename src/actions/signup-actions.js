export const UPDATE_SIGNUP_FIELD = 'UPDATE_SIGNUP_FIELD';


export function create_update_field(name, value) {
	return {
		type: UPDATE_SIGNUP_FIELD,
		name,
		value
	}
}