import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Verification = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join('');
    console.log('Verification code:', verificationCode);
  };

  const handleResend = () => {
    setTimer(120);
    setCanResend(false);
    setCode(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
    console.log('Resending code...');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4" dir="rtl">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">تأیید شماره تلفن</CardTitle>
          <CardDescription>
            کد تأیید ۶ رقمی ارسال شده به شماره
            <br />
            <span className="font-medium">۰۹۱۲۳۴۵۶۷۸۹</span>
            <br />
            را وارد کنید
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center gap-3">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-lg font-bold border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              ))}
            </div>
            
            <Button type="submit" className="w-full" disabled={code.some(digit => !digit)}>
              تأیید
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </form>
          
          <div className="text-center space-y-4">
            {!canResend ? (
              <p className="text-sm text-muted-foreground">
                ارسال مجدد کد در{' '}
                <span className="font-medium text-primary">
                  {formatTime(timer)}
                </span>
              </p>
            ) : (
              <Button variant="outline" onClick={handleResend} className="w-full">
                ارسال مجدد کد تأیید
              </Button>
            )}
            
            <p className="text-sm text-muted-foreground">
              شماره اشتباه است؟{' '}
              <button className="text-primary hover:underline font-medium">
                ویرایش شماره
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Verification;