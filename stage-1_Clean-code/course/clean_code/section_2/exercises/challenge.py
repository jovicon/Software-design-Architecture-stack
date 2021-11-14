###############################################################################
# INITAL CODE
###############################################################################
class Point:
    def __init__(self, coordX, coordY):
        self.coordX = coordX
        self.coordY = coordY


class Rectangle:
    def __init__(self, starting_point, broad, high):
        self.starting_point = starting_point
        self.broad = broad
        self.high = high

    def area(self):
        return self.broad * self.high

    def end_points(self):
        top_right = self.starting_point.coordX + self.broad
        bottom_left = self.starting_point.coordY + self.high
        print('Starting Point (X)): ' + str(self.starting_point.coordX))
        print('Starting Point (Y)): ' + str(self.starting_point.coordY))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


def build_stuff():
    main_point = Point(50, 100)
    rect = Rectangle(main_point, 90, 10)

    return rect


my_rect = build_stuff()

print(my_rect.area())
my_rect.end_points()


###############################################################################
# MY CODE
###############################################################################
class Point:
    def __init__(self, coordinate_x: int, coordinate_y: int):
        self.coordinate_x = coordinate_x
        self.coordinate_y = coordinate_y


class Rectangle:
    def __init__(self, starting_point: Point, broad: int, high: int):
        self.starting_point = starting_point
        self.broad = broad
        self.high = high

    def get_area(self) -> int:
        return self.broad * self.high

    def print_area(self):
        print('Area: ' + str(self.get_area()))

    def print_points(self):
        top_right_point = self.starting_point.coordinate_x + self.broad
        bottom_left_point = self.starting_point.coordinate_y + self.high

        print('Starting Point (X)): ' + str(self.starting_point.coordinate_x))
        print('Starting Point (Y)): ' + str(self.starting_point.coordinate_y))
        
        print('End Point X-Axis (Top Right): ' + str(top_right_point))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left_point))


def build_rectangle(point: Point, broad: int, high: int) -> Rectangle:
    return Rectangle(point, broad, high)


new_point = Point(50, 100)

new_rectangle = build_rectangle(new_point, 90, 10)

new_rectangle.print_area()
new_rectangle.print_points()


###############################################################################
# SOLUTION CODE
###############################################################################
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Rectangle:
    def __init__(self, origin, width, height):
        self.origin = origin
        self.width = width
        self.height = height

    def get_area(self):
        return self.width * self.height

    def print_coordinates(self):
        top_right = self.origin.x + self.width
        bottom_left = self.origin.y + self.height
        print('Starting Point (X)): ' + str(self.origin.x))
        print('Starting Point (Y)): ' + str(self.origin.y))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


def build_rectangle():
    rectangle_origin = Point(50, 100)
    rectangle = Rectangle(rectangle_origin, 90, 10)

    return rectangle


rectangle = build_rectangle()

print(rectangle.getArea())
rectangle.print_coordinates()
