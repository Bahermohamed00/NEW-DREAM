    
     // Mobile nav toggle
      (function(){
        const btn = document.querySelector('.nav-toggle');
        const nav = document.querySelector('nav');
        const tags = document.querySelector('.nav-tags');
        if (!btn || !nav || !tags) return;
        btn.addEventListener('click', function(){
          const open = nav.classList.toggle('nav-open');
          btn.setAttribute('aria-expanded', open);
          // toggle visibility for .nav-tags (for CSS fallback)
          tags.style.display = open ? 'block' : '';
        });
      })();




      function downloadPDF() {
        const link = document.createElement('a');
        link.href = 'ProfileCompany-min.pdf';
        link.download = 'ProfileCompany-min.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      function handleSubmit(event) {
        event.preventDefault();
        
        const form = event.target;
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();
        
        // Validation
        if (!name) {
          alert('الرجاء إدخال الاسم');
          return;
        }
        
        if (!email) {
          alert('الرجاء إدخال البريد الإلكتروني');
          return;
        }
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('الرجاء إدخال بريد إلكتروني صحيح');
          return;
        }
        
        if (!message) {
          alert('الرجاء إدخال الرسالة');
          return;
        }
        
        // Store form data in localStorage
        const formDataObj = {
          name: name,
          email: email,
          message: message,
          timestamp: new Date().toLocaleString('ar-EG')
        };
        
        // Get existing messages from localStorage
        let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        messages.push(formDataObj);
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        
        // Log to console
        console.log('Form Data Saved:', formDataObj);
        console.log('All Messages:', JSON.parse(localStorage.getItem('contactMessages')));
        
        // Show success message
        alert('شكراً لتواصلك معنا! تم حفظ رسالتك بنجاح.');
        
        // Reset form
        form.reset();
      }
    


