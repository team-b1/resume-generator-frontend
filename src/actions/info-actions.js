export const UPDATE_INFO_FIELD = 'UPDATE_INFO_FIELD';


export function create_update_field(name, value) {
	return {
		type: UPDATE_INFO_FIELD,
		name,
		value
	}
}