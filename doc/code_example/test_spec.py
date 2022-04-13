from mamba import description, it
from expects import expect, equal

with description('Running a simple test'):
    with it('asserts True to True'):
        expect(True).to(equal(True))