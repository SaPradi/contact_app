export function extractLetterAvatar(first_name:string,last_name:string):string {

    const firstLetter = first_name.charAt(0).toUpperCase();
    const secondLetter = last_name.charAt(0).toUpperCase();

    const nameAvatarLetter = firstLetter + secondLetter;

    return nameAvatarLetter;

}