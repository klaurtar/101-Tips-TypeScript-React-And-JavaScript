const quote = 'i love javascript';

// Uppercase: Converts all characters in the string to uppercase.
type UpperCaseString = Uppercase<typeof quote>; // "I LOVE JAVASCRIPT"

// Lowercase: Converts all characters in the string to lowercase.
type LowerCaseString = Lowercase<'I LOVE JAVASCRIPT'>; // "i love javascript"

// Capitalize: Converts the first character of the string to uppercase.
type CapitalizedString = Capitalize<typeof quote>; // "I love javascript"

// Uncapitalize: Converts the first character of the string to lowercase.
type UncapitalizedString = Uncapitalize<'I love JavaScript'>; // "i love JavaScript"

// ========= Implementation =========
interface QuotesCollection {
  screaming?: Uppercase<string>;
  quiet?: Lowercase<string>;
  proper?: Capitalize<string>;
  informal?: Uncapitalize<string>;
}

const myQuotes: QuotesCollection = {
  screaming: 'Chocolate chip cookies are good', // Type 'string' is not assignable to type 'Uppercase<string>'
  quiet: 'friends are a great thing', // ✅
  proper: `What's for dinner?`, // ✅
  informal: 'what r u like some kind of linkedin influencer?', // ✅
};
