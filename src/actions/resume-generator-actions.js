export const GENERATE_RESUME = 'UPDATE_INFO_FIELD';
export const GENERATE_RESUME_SUCCESS = 'GENERATE_RESUME_SUCCESS';
export const GENERATE_RESUME_FAIL = 'GENERATE_RESUME_FAIL';

export function create_generate_resume(template) {
    return {
        type: GENERATE_RESUME,
        template
    }
}
