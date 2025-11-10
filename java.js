// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Xử lý logic Form Submission (Đăng nhập)
    const loginForm = document.querySelector('form');
    if (loginForm) {
        // Cấu hình tài khoản hợp lệ (thay bằng kiểm tra server khi cần)
        const VALID_CREDENTIALS = { username: 'thanhnhan', password: '123456' };
        const HOME_PAGE =  'home.html';

        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Ngăn chặn form gửi đi
            
            const username = loginForm.querySelector('input[type="text"]').value.trim();
            const password = loginForm.querySelector('input[type="password"]').value;
            
            // Kiểm tra đơn giản phía client
            if (!username || !password) {
                alert('Vui lòng nhập tài khoản và mật khẩu.');
                return;
            }

            if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
                // Đăng nhập thành công -> chuyển hướng đến trang chủ
                // Có thể hiển thị thông báo trước khi chuyển
                // alert('Đăng nhập thành công!');
                window.location.href = HOME_PAGE;
            } else {
                // Đăng nhập thất bại
                alert('Sai tài khoản hoặc mật khẩu.');
            }
        });
    }

    // 2. Xử lý nút "Tạo tài khoản mới"
    const registerButton = document.querySelector('.secondary.register');
    if (registerButton) {
        registerButton.addEventListener('click', () => {
            console.log('Chuyển hướng đến trang đăng ký...');
            // Chuyển hướng đến trang đăng ký (ví dụ)
            // window.location.href = 'https://account.garena.com/register';
        });
    }

    // 3. Xử lý thay đổi ngôn ngữ
    const langSelect = document.querySelector('.lang');
    if (langSelect) {
        langSelect.addEventListener('change', (event) => {
            const selectedLang = event.target.value;
            console.log(`Ngôn ngữ đã chọn: ${selectedLang}. Đang tải lại giao diện...`);
            // Ở đây sẽ là logic để tải lại trang với ngôn ngữ mới
        });
    }
});

