const color = ['黑桃', '红心', '梅花', '方块'] as const;
const value = [
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
] as const;

type Value = typeof value[number];
type Color = typeof color[number];

const create = (value: Value, color: Color) => {
    return {
        value,
        color
    }
}

const data = create('A', '红心')

console.log(data)
