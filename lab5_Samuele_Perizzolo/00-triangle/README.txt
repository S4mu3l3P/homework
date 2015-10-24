Full documentation of jasmine at: http://jasmine.github.io/2.0/introduction.html

Test the features of the *Triangle* library.
--------------------------------------------
May be of use: http://en.wikipedia.org/wiki/Triangle

/* Returns true if the sides a, b, c correspond to a valid triangle, false otherwise */
Triangle.isTriangle(a, b, c);

/* Returns the type of triangle by side length:
 *  TryAngle.SIDE_EQUILATERAL
 *  Triangle.SIDE_ISOSCELES  
 *  Triangle.SIDE_SCALENE
 */    
Triangle.getTypeBySidesLength(a, b, c);

/* Returns the type of triangle by angle:
 *  Triangle.ANGLE_ACUTE 
 *  Triangle.ANGLE_OBTUSE 
 *  Triangle.ANGLE_RIGHT  
 */    
Triangle.getTypeByAngles(a, b, c);