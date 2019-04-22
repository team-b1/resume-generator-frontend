export const UPDATE_FIELD = 'UPDATE_FIELD';


export function create_update_field(name, value) {
	return {
		type: UPDATE_FIELD,
		name,
		value
	}
}