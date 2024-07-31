export interface ICourse{
    id: number,
    name: string,
    description: String,
    imageUrl: String,
    lessongCount: number,
    longDescription: String,
    category: categoryType
}

export enum categoryType{
    beginners = 1,
    intermediate = 2,
    advanced = 3,
    other
}