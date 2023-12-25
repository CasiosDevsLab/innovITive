export interface NavElement {
    name: string,
    path: string,
    description?: string,
    subelements?: NavElement[]
}