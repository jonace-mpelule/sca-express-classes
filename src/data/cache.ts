

export async function cache(storeData: Array<String>) {
    let data = storeData
    const getItem = (token: string): string | null => {
        return data.filter((e) => e == token)[0] as string ?? null
    }

    const addItem = (item: string) => {
        data = [...data, item]
    }

    return { getItem, addItem }
}