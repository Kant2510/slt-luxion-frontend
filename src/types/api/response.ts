export interface ResponseWithData<T> {
	data: T;
	message?: string;
	status: number;
}
