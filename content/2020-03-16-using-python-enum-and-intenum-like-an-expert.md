---
title: Using Python Enum and IntEnum Like An Expert
date: 2020-03-15T01:07:00.000Z
cover: /images/coding-is-hard.png
category: Tech Hecks
tags:
  - how to make
  - python
  - enum
  - models
---
Hello guys. If you use forms on your Django web applications and you want to clean model scheme, you should use enums! 

## Let's start

For example, you have a product model and your visitors select something on form like status.

If your choices are:
* Task
* Pending
* Published

...you have a two option. First one is complex and unmanagable.
You can create tuple like below and add 'choises' attribution to CharField:

```python
STATUS = (
  ("TASK", "Task"),
  ("PENDING", "Pending"),
  ("PUBLISHED", "Published"),
)
```
or 
```python
STATUS = (
  (1, "TASK"),
  (2, "PENDING"),
  (3, "PUBLISHED"),
)
```

Your product model:
```python
class Product(models.Model):
  category = models.ForeignKey("Category", on_delete=models.CASCADE, verbose_name="Category Name", blank=True, null=True)
  title = models.CharField(max_length=50, verbose_name="Product Title", blank=True, null=True)
  status = models.CharField(choices=STATUS)
```

It is correct and will work without errors. Python will save them to db as string.
But it is both complex and unmanageable. Because If you want to use this field anywhere, you need to call like below because tuple is not useful for calling:

```python
def example(self):
  if self.status == 1:
    make_something()
  elif self.status == 2:
    make_something()
```

I prefer using Enum or IntEnum.
Firstyl we need import Enum:

```python
from enum import Enum, IntEnum
```
Let's create our enum classes. Don't worry, we don't need create new migrations.

```python
class Status(enum.Enum):
  TASK = "Task"
  PENDING = "Pending"
  PUBLISHED = "Published"
```
or (how you want to keep them)
```python
class Status(enum.IntEnum):
  TASK = 1
  PENDING = 2
  PUBLISHED = 3
```

And your model should be below:
```python
class Product(models.Model):
  ...
  status = models.CharField(choices=((x.value, x.name.title()) for x in Status), default=Status.TASK)
```
or
```python
class Product(models.Model):
  ...
  status = models.IntegerField(choices=((x.value, x.name.title()) for x in Status), default=Status.TASK)
```

You can set a default value as I added above.
How do you use Enum on functions or anywhere?

You will call enums like below:
```python
def example(self):
  if self.status == Status.TASK.value:
    make_something()
  elif self.status == Status.PUBLISHED.value:
    make_something()
```
or you can iterate them like below:
```python
def get_states(self):
  return [{"id": s.id, "name": s.name} for s in Status]
```
Congratz! It's Pythonic way.
