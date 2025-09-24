import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const FitFood = () => {
  const mealPlans = [
    {
      id: 1,
      name: "Фитнес-лайн",
      description: "Снижение веса, 1200 ккал",
      price: "850 ₽/день",
      image: "/img/055f634e-04b9-4312-9498-d0967cab2522.jpg",
      calories: "1200 ккал",
      meals: "5 приемов пищи"
    },
    {
      id: 2,
      name: "Набор массы",
      description: "Увеличение веса, 2500 ккал",
      price: "1200 ₽/день",
      image: "/img/d530b603-0284-4c33-9cfe-4a2755e8a063.jpg",
      calories: "2500 ккал",
      meals: "6 приемов пищи"
    },
    {
      id: 3,
      name: "Баланс",
      description: "Поддержание веса, 1800 ккал",
      price: "950 ₽/день",
      image: "/img/52b19d62-1a66-4af0-ad17-40bad645b588.jpg",
      calories: "1800 ккал",
      meals: "5 приемов пищи"
    }
  ];

  const benefits = [
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставляем в день заказа по всему городу"
    },
    {
      icon: "Leaf",
      title: "Свежие продукты",
      description: "Используем только качественные и свежие ингредиенты"
    },
    {
      icon: "ChefHat",
      title: "Сбалансированное меню",
      description: "Меню разработано профессиональными диетологами"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Выберите",
      description: "Подберите подходящую программу питания"
    },
    {
      number: "02", 
      title: "Оформите",
      description: "Оформите заказ и выберите удобное время доставки"
    },
    {
      number: "03",
      title: "Получите",
      description: "Получите готовые блюда и наслаждайтесь вкусом"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">FitFood</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Меню</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <Icon name="Heart" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 relative">
                <Icon name="ShoppingCart" size={20} />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Правильное питание —
              <span className="text-primary block">это просто!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Выберите готовый рацион на день или соберите свой.
              <br className="hidden sm:block" />
              Бесплатная доставка от 1000 ₽
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                <Icon name="Apple" size={20} className="mr-2" />
                Выбрать рацион
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg">
                <Icon name="Plus" size={20} className="mr-2" />
                Собрать своё
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы заботимся о качестве каждого блюда и комфорте наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярные программы питания
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите программу, которая подходит именно вам
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mealPlans.map((plan) => (
              <Card key={plan.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={plan.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {plan.calories}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {plan.meals}
                    </span>
                    <span className="text-2xl font-bold text-primary">{plan.price}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              3 шага к вашему здоровому питанию
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простой процесс заказа здорового питания
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 z-0" 
                       style={{ transform: 'translateX(2rem)' }} />
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">FitFood</h3>
              <p className="text-gray-400 leading-relaxed">
                Здоровое питание с доставкой по всему городу. 
                Качественные продукты и профессиональный подход.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Меню</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Программы питания</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отдельные блюда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Напитки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Десерты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  hello@fitfood.ru
                </p>
                <div className="flex space-x-4 mt-4">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Icon name="Twitter" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FitFood. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FitFood;