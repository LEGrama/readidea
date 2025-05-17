// 카카오톡 메시지 미리보기 및 전송
class ContactManager {
    constructor() {
        this.kakaoId = 'gachang8291'; // 카카오톡 ID
        this.phoneNumber = '055-945-8291';
        this.email = 'gachang8291@daum.net';
        this.address = '경남 거창군 가조가야로 1111';
    }

    // 카카오톡 메시지 미리보기 생성
    createKakaoPreview() {
        const preview = document.createElement('div');
        preview.className = 'kakao-preview';
        
        const content = `
            <div class="kakao-header">
                <img src="/images/logo.png" alt="가창전기 로고" class="kakao-logo">
                <div class="kakao-info">
                    <h3>가창전기</h3>
                    <p>전기공사 전문업체</p>
                </div>
            </div>
            <div class="kakao-message">
                <p>안녕하세요, 가창전기입니다.</p>
                <p>문의사항이 있으시면 말씀해 주세요.</p>
            </div>
            <div class="kakao-buttons">
                <button onclick="contactManager.sendKakaoMessage()" class="kakao-btn">
                    <i class="fas fa-comment"></i> 카카오톡으로 문의하기
                </button>
                <button onclick="contactManager.copyPhoneNumber()" class="phone-btn">
                    <i class="fas fa-phone"></i> 전화번호 복사
                </button>
            </div>
        `;
        
        preview.innerHTML = content;
        return preview;
    }

    // 카카오톡 메시지 전송
    sendKakaoMessage() {
        const message = encodeURIComponent('안녕하세요, 가창전기 문의드립니다.');
        window.open(`https://open.kakao.com/me/${this.kakaoId}?text=${message}`);
    }

    // 전화번호 복사
    copyPhoneNumber() {
        navigator.clipboard.writeText(this.phoneNumber).then(() => {
            alert('전화번호가 복사되었습니다.');
        }).catch(err => {
            console.error('전화번호 복사 실패:', err);
        });
    }

    // 이메일 전송
    sendEmail() {
        const subject = encodeURIComponent('가창전기 문의');
        const body = encodeURIComponent('안녕하세요, 가창전기 문의드립니다.\n\n');
        window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
    }

    // 주소 복사
    copyAddress() {
        navigator.clipboard.writeText(this.address).then(() => {
            alert('주소가 복사되었습니다.');
        }).catch(err => {
            console.error('주소 복사 실패:', err);
        });
    }
}

// 문의하기 매니저 초기화
document.addEventListener('DOMContentLoaded', () => {
    const contactManager = new ContactManager();
    
    // 카카오톡 미리보기 추가
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        const preview = contactManager.createKakaoPreview();
        contactSection.appendChild(preview);
    }
}); 