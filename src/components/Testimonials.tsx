"use client";

import { Star, Heart, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export const Testimonials = () => {
  const [likes, setLikes] = useState<Record<number, number>>({});
  const [likedByUser, setLikedByUser] = useState<Record<number, boolean>>({});
  
  // Initialize likes from localStorage or use defaults
  useEffect(() => {
    const savedLikes = localStorage.getItem('testimonial-likes');
    const savedUserLikes = localStorage.getItem('user-likes');
    
    if (savedLikes) {
      setLikes(JSON.parse(savedLikes));
    } else {
      setLikes({
        1: 47,
        2: 32, 
        3: 28
      });
    }
    
    if (savedUserLikes) {
      setLikedByUser(JSON.parse(savedUserLikes));
    }
  }, []);
  
  // Save likes when user leaves the page
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('testimonial-likes', JSON.stringify(likes));
      localStorage.setItem('user-likes', JSON.stringify(likedByUser));
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [likes, likedByUser]);
  
  const handleLike = (testimonialId: number) => {
    if (likedByUser[testimonialId]) {
      // Remove like
      setLikes(prev => ({
        ...prev,
        [testimonialId]: (prev[testimonialId] || 0) - 1
      }));
      setLikedByUser(prev => ({
        ...prev,
        [testimonialId]: false
      }));
    } else {
      // Add like
      setLikes(prev => ({
        ...prev,
        [testimonialId]: (prev[testimonialId] || 0) + 1
      }));
      setLikedByUser(prev => ({
        ...prev,
        [testimonialId]: true
      }));
    }
  };
  const testimonials = [
    {
      id: 1,
      name: "Ana Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "Sem palavras! Esse curso me fez sentir coisas que eu nem sonhava, eu nem sabia que era o tal do squirt, aplicando algumas técnicas pude experimentar, lembro como se fosse ontem meu marido ficou louco, foi uma explosão de prazer. Mudou minha vida sexual, até recomendo para pessoas próximas!",
      likes: 47,
      avatar: "https://cursospromocionaishoje.online/wp-content/uploads/2025/05/0kfVONokKDl8A8LlcQ.jpeg"
    },
    {
      id: 2,
      name: "Juliana Dias", 
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Mudou tudo! Me sinto mais presente, mais viva, e a conexão com meu marido tá outro mundo. Foi transformador!",
      likes: 32,
      avatar: "https://cursospromocionaishoje.online/wp-content/uploads/2025/05/aRQfmX2hUGqDiohEtjQ.jpeg"
    },
    {
      id: 3,
      name: "Ricardo Muller",
      location: "Belo Horizonte, MG", 
      rating: 5,
      text: "Não dava nada no começo, só entrei por curiosidade. Mas depois que assisti as aulas e apliquei algumas técnicas em minha mulher e ela em mim, mudou nossa noites íntimas",
      likes: 28,
      avatar: "https://cursospromocionaishoje.online/wp-content/uploads/2025/05/foto-ricardo.jpg"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-card-foreground px-2">
            Comentários dos Alunos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
            Veja o que nossos alunos estão dizendo sobre o curso
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-background/80 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border shadow-lg hover:shadow-xl smooth-transition"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonial.avatar} 
                    alt={`Foto de ${testimonial.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 space-y-2 sm:space-y-3 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-bold text-foreground text-base sm:text-lg truncate">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-left sm:text-right flex-shrink-0">
                      <div className="flex items-center gap-1 mb-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        avaliou o curso
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    {testimonial.text}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-2">
                    <button 
                      onClick={() => handleLike(testimonial.id)}
                      className={`flex items-center gap-1.5 sm:gap-2 smooth-transition ${
                        likedByUser[testimonial.id] 
                          ? 'text-red-500 hover:text-red-600' 
                          : 'text-primary hover:text-primary/80'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${likedByUser[testimonial.id] ? 'fill-current' : ''}`} />
                      <span className="text-xs sm:text-sm">
                        {likes[testimonial.id] || testimonial.likes} curtidas
                      </span>
                    </button>
                    
                    <button className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground smooth-transition">
                      <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">Curtir</span>
                    </button>
                    
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground smooth-transition">
                      <span className="text-xs sm:text-sm">Compartilhar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center px-2">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-primary/30">
            <p className="text-foreground text-sm sm:text-base md:text-lg font-semibold">
              ⭐ Mais de 10.000 alunos satisfeitos com nota média 4.9/5
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};