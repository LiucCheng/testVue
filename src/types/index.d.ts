/**
 * @Author: LiuCheng
 * @Date: 2023/8/24
 * @Time: 09:18
 * @Descriptions:
 */
// 移除可选项属性成必选
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
// 去除只读属性
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
// 映射类型中的as句重新映射映射类型中的键
type MappedTypeWithNewProperties<Type> = {
  [Properties in keyof Type as NewKeyType]: Type[Properties]
}
// 获得字面量的第一个字符
type FirstChar<T> = T extends `${infer R}${infer _}` ? R : never
// 获取字符串最后一个字符
type LastChar<T extends string, A extends string[] = []> = T extends `${infer P}${infer Q}`
  ? LastChar<Q, [...A, P]>
  : A extends [...infer _, infer R]
    ? R
    : never
// 字符串转换为元组类型
type StringToTuple<T, A extends string[] = []> =T extends `${infer P}${infer Q}`
  ? StringToTuple<Q, [...A, P]>
  :  A
// 将字符串类型的元素转换为字符串字面量类型
type TupleToString<T, R extends string = ''> = T extends [infer A, ...infer B]
  ? A extends `${infer AA}`
    ? TupleToString<B, `${R}${AA}`>
    : ''
  : R
// 首字母大写
type CapitalizeString<T> = T extends `${infer R}${infer K}` ? `${Uppercase<R>}${K}` : T
// type CapitalizeString<T extends string | number> = T extends string? Capitalize<T> : T;
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};
// 复制字符T为字符串类型，长度为C
type RepeatString<
T extends string,
  C extends number,
  S extends string = '',
  A extends any[] = []
> = A['length'] extends C ? S : RepeatString<T, C, `${T}${S}`, [1, ...A]>
// 将字符串字面量类型按照指定字符，分割为元组。无法分割则返回原字符串字面量
type SplitString<
  T,
  Separator extends string,
  A extends any[] = []
> = T extends ''
  ? A
  : T extends `${infer L}${Separator}${infer R}`
    ? SplitString<R, Separator, [...A, L]>
    : [...A, T];
// 计算字符串字面量类型的长度
type LengthOfString<T extends string, TT extends any[] = []> = T extends ''
  ? TT['length']
  : T extends `${infer L}${infer R}`
    ? LengthOfString<R, [...TT, L]>
    : never;
// 字符串拼接
type JoinString<
  T extends string,
  K extends string,
  Separator extends string
> = T extends ''
  ? K extends ''
    ? never
    : K
  : K extends ''
    ? T
    : `${T}${Separator}${K}`;
// 得到对象中的值访问字符串
type ObjectAccessPaths<
  T extends Record<string, any>,
  Prev extends string = '',
  K = keyof T
> = K extends keyof T
  ? K extends string
    ? T[K] extends Record<string, any>
      ? ObjectAccessPaths<T[K], JoinString<Prev, K, '.'>>
      : JoinString<Prev, K, '.'>
    : never
  : never;
// 计算元组类型的长度
type LengthOfTuple<T extends any[]> = T['length']
// 移除元组类型中的第一个类型
type Shift<T> = T extends [infer _, ...infer R] ? R : T
// 得到元组类型中的最后一个元素
type LastItem<T> = T extends [...infer _, infer R] ? R : never
// 在元组类型中添加新的类型
type Push<T extends any[], V> = [...T, V]
// Promise成功返回值类型，例如：InferPromise<Promise<string>>; // string
type InferPromise<T> =  T extends Promise<infer U> ? U : never;

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: 'incrementing' };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;