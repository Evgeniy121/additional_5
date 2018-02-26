module.exports = function check(str, bracketsConfig) {
  // your solution
  var stack = [];
  var check,ch=0;ch7=0;ch8=0;
  for (i=0; i<str.length;i++) {
    c=str[i];
      if (c == '{' || c == '[' || c == '(' || c == '1' || c == '3' || c == '5'  ) {
          stack.push(c);
      } else{
      if (c=='|' && ch==0) {stack.push(c);ch++;}else  {
  if (c=='7' && ch7==0) {stack.push(c);ch7++;}else{
      if (c=='8' && ch8==0) {stack.push(c);ch8++;}else  {
          if (stack) {
              check = stack.pop();
             if (c == '}' && check != '{') {
                 return false;
             } else if (c == ']' && check != '[') {
                 return false;
             } else if (c == ')' && check != '(') {
                 return false;}
                 else if (c == '2' && check != '1') {
                     return false;}
                     else if (c == '4' && check != '3') {
                         return false;}
                         else if (c == '6' && check != '5') {
                             return false;}
                 else if (c == '|' && check != '|') {
                     return false;}
                     else if (c == '|' && check == '|') {
                         ch=0;}
                         else if (c == '7' && check != '7') {
                             return false;}
                             else if (c == '7' && check == '7') {
                                 ch7=0;}
                                 else if (c == '8' && check != '8') {
                                     return false;}
                                     else if (c == '8' && check == '8') {
                                         ch8=0;}


       } else {
            return false;
       }
     }}}}
  }

  if ( stack.pop() ) return false;

  return true;
}
